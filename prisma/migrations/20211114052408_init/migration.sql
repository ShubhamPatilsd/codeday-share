-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "media" TEXT,
    "message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");
