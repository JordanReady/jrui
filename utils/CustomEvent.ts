import { sendGTMEvent } from "@next/third-parties/google";

export function customEvent(eventName: string, value: any) {
  sendGTMEvent({
    event: eventName,
    value: value,
  });
}
