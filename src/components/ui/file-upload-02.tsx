"use client";
import TLUploadCloud from "@/components/upload-cloud";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import axios from "axios";
import React, { useRef, useState } from "react";
import Attachment06 from "./attachment-06";
import { useForm, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";

const FileUpload02 = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const form = useFormContext();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setUploadProgress(0);
      form.setValue("cv", e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    form.setValue("cv", null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    form.setValue("cv", selectedFile);

    try {
      const response = await axios.post("/api/upload", formData, {
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          }
        },
      });

      // Handle success (e.g., show uploaded URL)
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };
  const t = useTranslations();
  return (
    <Card>
      <CardContent className="px-6 space-y-4">
        <div
          className="border-2 border-dashed border-main rounded-lg flex flex-col gap-1 p-6 items-center cursor-pointer hover:bg-gray-50 relative"
          onClick={() => fileInputRef.current?.click()}
        >
          <TLUploadCloud className="size-12 text-main" />
          <div className="text-base font-medium ">
            <span className="text-black">{t("Drag your file or")}</span>{" "}
            <span className="text-main">{t("Browse")}</span>
          </div>
          <span className="text-xs text-gray-500">
            {t("Max 5 MB files are allowed")}
          </span>

          {isUploading && (
            <div className="w-full mt-4">
              <Progress value={uploadProgress} className="h-2" />
              <span className="text-xs text-gray-500 mt-1">
                Uploading... {uploadProgress}%
              </span>
            </div>
          )}
        </div>
        <p className="text-gray-500 text-sm">{t("Only support-files")}</p>

        {selectedFile && (
          <Attachment06
            className="m-auto"
            onClick={(e) => {
              e.stopPropagation();
              removeFile();
            }}
            fileName={selectedFile.name}
            fileSizeInBytes={selectedFile.size}
            isUploading={isUploading}
            progress={uploadProgress}
          />
        )}
        <Input
          id="file"
          type="file"
          placeholder="File"
          accept=".pdf, .doc, .docx, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
        {form && form.getFieldState("cv").error?.message && (
          <p className="text-destructive mt-2">
            {form.getFieldState("cv").error?.message}
          </p>
        )}
      </CardContent>
      {/* <CardFooter>
        <Button
          size="lg"
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
        >
          {isUploading ? `Uploading... (${uploadProgress}%)` : "Upload"}
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default FileUpload02;
