async function makeFetchRequest(url, method = "GET", body = null) {
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  });
  return response.json();
}

async function getTeachers() {
  try {
    const response = await makeFetchRequest("/api/teachers");
    console.log("Here are all teachers we have", response);
  } catch (error) {
    console.log(error);
  }
}

async function getPoorestTeachers(salary) {
  try {
    const response = await makeFetchRequest(`/api/teachers/poorestTeachers/`, "POST", { salary });
    console.log("Here are teachers with small salary we have", response);
  } catch (error) {
    console.log(error);
  }
}
async function createNewTeacher(fullName, passportId, salary, profession) {
  try {
    const response = await makeFetchRequest("/api/teachers", "POST", {
      fullName,
      passportId,
      salary,
      profession,
    });
    console.log("Your creation result is", response);
  } catch (error) {
    console.log(error);
  }
}

console.log("Front is here");

getTeachers();
getPoorestTeachers(12000);
createNewTeacher("Muhammad Ali", 9999999, 10000000, "Legend Boxer");
