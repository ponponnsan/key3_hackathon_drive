-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
