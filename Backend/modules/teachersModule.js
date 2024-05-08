import { getCollection, toObjectId } from "./dbModule.js";

const entity = "teachers";

export async function insertArrTeachers(teachersData) {
  try {
    const collection = await getCollection(entity);
    const teachers = await collection.insertMany(teachersData);
    if (!teachers || teachers.length === 0) return;
  } catch (error) {
    console.log({ error });
  }
}

export async function getTeachers() {
  try {
    const collection = await getCollection(entity);
    const teachers = await collection.find().toArray();
    if (!teachers || teachers.length === 0) return;
    return teachers;
  } catch (error) {
    console.log({ error });
  }
}

export async function getPoorestTeachers(salaryInsert) {
  try {
    const collection = await getCollection(entity);
    const teachers = await collection.find({ salary: { $lt: salaryInsert } }).toArray();
    if (!teachers || teachers.length === 0) return;
    return teachers;
  } catch (error) {
    console.log({ error });
  }
}

export async function createTeacher(fullName, passportId, salary, profession) {
  try {
    const collection = await getCollection(entity);
    const teacher = {
      fullName,
      passportId,
      salary,
      profession,
    };
    const isExist = await collection.findOne({ fullName, profession });
    console.log(isExist);
    if (isExist) {
      throw new Error("The teacher is already exist!!!");
    }
    await collection.insertOne(teacher);
    return teacher;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
