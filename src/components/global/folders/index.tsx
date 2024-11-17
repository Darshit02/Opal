"use client";
import FolderDuotone from "@/components/icons/folder-duotone";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Folder from "./folder";
import { useQueryData } from "@/hooks/useQueryData";
import { getWorkspaceFolders } from "@/actions/workspace";
import { useMutationDataState } from "@/hooks/useMutationData";
import { Skeleton } from "@/components/ui/skeleton";
// import Videos from '../videos'
// import { useDispatch } from 'react-redux'
// import { FOLDERS } from '@/redux/slices/folders'

type Props = {
  workspaceId: string;
};

export type FoldersProps = {
  status: number;
  data: ({
    _count: {
      videos: number;
    };
  } & {
    id: string;
    name: string;
    createdAt: Date;
    workSpaceId: string | null;
  })[];
};

const Folders = ({ workspaceId }: Props) => {
  //   const dispatch = useDispatch()
  //get folders
  const { data, isPending, isFetched, isFetching } = useQueryData(
    ["workspace-folders"],
    () => getWorkspaceFolders(workspaceId)
  );

  const { latestVariables } = useMutationDataState(["create-folder"]);

  // const { status, data: folders } = data || {};
  const { status, data: folders } = (data as FoldersProps) || {
    status: 500,
    data: [],
  };

  // if (isFetched && folders) {
  // }

  if (isFetched && folders) {
    // dispatch(FOLDERS({ folders: folders }))
  }

  const hasError = !isPending && status !== 200;

  return (
    <div className="flex flex-col gap-4" suppressHydrationWarning>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FolderDuotone />
          <h2 className="text-[#BDBDBD] text-xl">Folders</h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#BDBDBD]">See all</p>
          <ArrowRight color="#707070" />
        </div>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto w-full justify-start">
        {/* Show loading message if data is still loading */}
        {/* {(isPending || isFetching) && (
          <>
            <Skeleton className="min-w-[250px] h-[60px]" />
          </>
        )} */}
        {/* Show error message if data fetching encountered an error */}
        {hasError && (
          <p className="text-red-500">
            Failed to load folders. Please try again.
          </p>
        )}

        {/* Show folders or "No folders" message only after data has been fetched */}
        {isFetched && !hasError && (
          <>
            {folders.length === 0 ? (
              <p className="text-neutral-300">No folders in workspace</p>
            ) : (
              <>
                {latestVariables && latestVariables.status === "pending" && (
                  <Folder
                    name={latestVariables.variables.name}
                    id={latestVariables.variables.id}
                    optimistic
                  />
                )}
                {folders.map((folder) => (
                  <Folder
                    name={folder.name}
                    count={folder._count.videos}
                    id={folder.id}
                    key={folder.id}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Folders;
