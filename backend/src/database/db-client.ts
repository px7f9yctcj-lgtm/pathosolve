// backend/src/database/db-client.ts
import { PrismaClient } from "./generated/index.js"; // matches generator output

const prisma = new PrismaClient();

export default prisma;
