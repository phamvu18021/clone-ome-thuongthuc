"use client";

import { GET_EVENT_UPCOMING } from "@/src/app/api/Graphql/event";
import ButtonAnimation from "@/src/app/components/atoms/ButtonAnimation";
import LoadingOverlay from "@/src/app/components/atoms/LoadingOverlay";
import Portal from "@/src/app/components/atoms/Portal";
import FormExcel from "@/src/app/components/molecules/FormExcel";
import CloseIcon from "@/src/icons/CloseIcon";
import { getData } from "@/src/lib/getData";
import { formatDate } from "@/src/utils/date";
import Image from "next/image";
import { useEffect, useState } from "react";

export const EventSesion4 = () => {
  const [eventData, setEventData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getData(GET_EVENT_UPCOMING);

        if (!response) {
          throw new Error("No data received from API");
        }

        const event = response.pageBy.event.content2;
        if (!event) {
          throw new Error("No event data found in response");
        }
        setEventData(event);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch event data"
        );
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvent();
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  return (
    <>
      <div className="relative text-white rounded-md overflow-hidden h-[120px]">
        {isLoading && <LoadingOverlay />}
        <div className="absolute inset-0">
          <Image
            src={
              eventData?.banner?.node?.mediaItemUrl ||
              "/thuong-thuc-doi-song/no-image.jpeg"
            }
            alt="Banner background"
            fill
            sizes="(max-width: 768px) 100vw, 100%"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-8 py-4">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl italic text-white">
              {eventData?.name}
            </h2>
            <p className="text-white mt-1 font-bold">{eventData?.eventname}</p>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-white text-sm">Ngày:</span>
                <span className="text-gray-300 text-sm">
                  {formatDate(eventData?.date)}
                </span>
                <span className="text-gray-300 text-sm">
                  {eventData?.starttime} - {eventData?.endTime}
                </span>
              </div>
            </div>
          </div>

          <div>
            <ButtonAnimation
              onClick={() => setShowPopup(true)}
              padding="px-5 py-2"
              fontWeight="font-medium"
              uppercase={true}
              text="Đăng kí tham gia"
              bg="bg-white"
              hoverBg="bg-gray-500"
              textColor="text-gray-800"
              borderColor="border-gray-200"
              rounded="rounded-md"
            />
          </div>
        </div>
      </div>
      {showPopup && (
        <Portal>
          <div className="fixed inset-0 z-[9999]">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowPopup(false)}
            />
            <div
              className="relative z-[10000] flex items-center justify-center min-h-screen p-4"
              onClick={(e) => {
                if (e.currentTarget === e.target) {
                  setShowPopup(false);
                }
              }}
            >
              <div
                className="bg-white p-5 rounded-lg w-[400px] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer"
                  onClick={() => setShowPopup(false)}
                  aria-label="Đóng"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
                <h3 className="text-center font-bold text-2xl mb-5">ĐĂNG KÝ</h3>
                <FormExcel />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
