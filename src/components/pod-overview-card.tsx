"use client";

import Image from "next/image";
import { SiFarcaster } from "react-icons/si";
import { RiExternalLinkLine } from "react-icons/ri";

import { usePodToken } from "@/hooks/usePodToken";
import { PodStats } from "./pod-stats";
import { PodBenefits } from "./pod-benefits";
import { PodRelatedLinks } from "./pod-related-links";

export function PodOverviewCard({
  tokenId,
  size,
}: {
  tokenId: string;
  size: "sm" | "lg";
}) {
  const { podToken, meta } = usePodToken({ tokenId });

  if (!podToken || !meta) return null;

  if (size === "sm") {
    return (
      <div className="p-4 flex flex-row flex-wrap gap-5 items-center justify-center">
        <div>
          <Image
            src={meta.image}
            alt="logo"
            width="100"
            height="100"
            className="rounded-full"
          />
        </div>
        <div className="w-full sm:w-3/5">
          <p className="font-body text-base font-bold">{`ID ${podToken?.id}`}</p>
          <p className="text-3xl font-sans text-broodRed">{meta.name}</p>
          <p className="font-body text-base text-broodGreen font-bold">{`${
            podToken?.totalClaims
          } Collector${
            podToken?.totalClaims && Number(podToken.totalClaims) > 1 ? "s" : ""
          }`}</p>
        </div>
      </div>
    );
  }

  if (size === "lg") {
    return (
      <div className="flex flex-col justify-center items-center p-4 sm:p-10 border border-broodGreen shadow-brood">
        <div className="bg-gray-800 w-full p-5 flex justify-center">
          <Image
            src={meta.image}
            alt="logo"
            width="300"
            height="300"
            className="hidden sm:block rounded-full"
          />
          <Image
            src={meta.image}
            alt="logo"
            width="200"
            height="200"
            className="block sm:hidden rounded-full"
          />
        </div>

        <div className="p-1 sm:p-4 flex flex-row flex-wrap items-center justify-center">
          <div className="w-full p-2 sm:p-10 flex flex-col gap-5 justify-center">
            <div>
              <div className="w-full">
                <p className="font-sans text-3xl sm:text-5xl text-broodRed">
                  {meta.name}
                </p>
              </div>

              <div className="w-full">
                <p className="text-sm sm:text-md">{meta.description}</p>
              </div>
            </div>

            <div className="w-full sm:w-1/5 flex flex-row gap-3 border border-broodGreen py-1 px-4 rounded-full">
              <p className="text-lg text-broodGreen font-bold">
                {podToken?.totalClaims}
              </p>
              <p className="text-lg text-broodGreen font-bold">{`Collector${
                podToken?.totalClaims && Number(podToken.totalClaims) > 1
                  ? "s"
                  : ""
              }`}</p>
            </div>

            <PodStats tokenId={tokenId} />

            <PodRelatedLinks tokenId={tokenId} />

            <PodBenefits tokenId={tokenId} />
          </div>
        </div>
      </div>
    );
  }
}
