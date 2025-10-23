import prisma from "./db-client";

async function test() {
  const graphs = await prisma.graph.findMany();
  console.log("Graphs:", graphs);
}

test()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());