"use-client";

import { UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";

type FileUploadProps = {
  endpoint: "messageFile" | "serverImage";
  value: string;
  onChange: (url: string) => void;
};

export const FileUpload = ({ endpoint, value, onChange }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-red-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      <UploadDropzone
        appearance={{
          uploadIcon: "size-12 my-4 text-muted-foreground",
          button: "bg-black px-4 my-4",
        }}
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res[0].ufsUrl);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
};
