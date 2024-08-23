-- CreateTable
CREATE TABLE "EmailSchema" (
    "id" SERIAL NOT NULL,
    "to" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "subject" TEXT,
    "body" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "starred" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "EmailSchema_pkey" PRIMARY KEY ("id")
);
