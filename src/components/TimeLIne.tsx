import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import logo from '../../public/[CITYPNG.COM]HD Man User Illustration Icon Transparent PNG - 1000x1000.png';
import avatar_1 from '../../public/avatar_1.jpeg';
import avatar_2 from '../../public/avatar_2.jpeg';
export default function TimeLine() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
      className="bg_Image rounded-2xl overflow-hidden shadow-md shadow-gray-400">
      <div className="py-4 z-20">
        <h1 className="text-white text-lg font-semibold text-start">
          Upcoming Meetings
        </h1>
        <TimelineItem className="text-white mt-1">
          <TimelineSeparator>
            <TimelineDot color="grey" className=" scale-75" />
            <TimelineConnector className="h-full scale-125 w-2 bg-white" />
          </TimelineSeparator>
          <TimelineContent>
            <span className="flex flex-col items-start">
              <h3 className=" text-sm">Meeting with HR - Job Interview</h3>
              <p className="text-gray-400 text-sm">10:00 AM - 11:00 AM</p>
              <AvatarGroup
                spacing="small"
                classes={{ avatar: "mt-2 scale-75" }}>
                <Avatar alt="Remy Sharp" src={logo.src} />
                <Avatar alt="Travis Howard" src={avatar_1.src} />
                <Avatar alt="Cindy Baker" src={avatar_2.src} />
              </AvatarGroup>
            </span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="text-white mt-1">
          <TimelineSeparator>
            <TimelineDot color="grey" className=" scale-75" />
            <TimelineConnector className="h-full scale-125 w-2 bg-white" />
          </TimelineSeparator>
          <TimelineContent>
            <span className="flex flex-col items-start">
              <h3 className=" text-sm">Meeting with HR - Job Interview</h3>
              <p className="text-gray-400 text-sm">10:00 AM - 11:00 AM</p>
              <AvatarGroup
                spacing="small"
                classes={{ avatar: "mt-2 scale-75" }}>
                <Avatar alt="Remy Sharp" src={logo.src} />
                <Avatar alt="Travis Howard" src={avatar_1.src} />
                <Avatar alt="Cindy Baker" src={avatar_2.src} />
              </AvatarGroup>
            </span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="text-white mt-1">
          <TimelineSeparator>
            <TimelineDot color="grey" className=" scale-75" />
            {/* <TimelineConnector className="h-full scale-125 w-2 bg-white" /> */}
          </TimelineSeparator>
          <TimelineContent>
            <span className="flex flex-col items-start">
              <h3 className=" text-sm">Meeting with HR - Job Interview</h3>
              <p className="text-gray-400 text-sm">10:00 AM - 11:00 AM</p>
              <AvatarGroup
                spacing="small"
                classes={{ avatar: "mt-2 scale-75" }}>
                <Avatar alt="Remy Sharp" src={logo.src} />
                <Avatar alt="Travis Howard" src={avatar_1.src} />
                <Avatar alt="Cindy Baker" src={avatar_2.src} />
              </AvatarGroup>
            </span>
          </TimelineContent>
        </TimelineItem>
      </div>
    </Timeline>
  );
}
