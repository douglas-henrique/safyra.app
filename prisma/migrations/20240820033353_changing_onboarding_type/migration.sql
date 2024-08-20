/*
  Warnings:

  - Made the column `isOnboardingDone` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isOnboardingDone" SET NOT NULL,
ALTER COLUMN "isOnboardingDone" SET DEFAULT false;
