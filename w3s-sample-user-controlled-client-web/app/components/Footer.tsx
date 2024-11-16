
import { Typography } from "@mui/joy";
import Link from "next/link";

export const Footer = () => (
  <footer className='absolute bottom-0 flex flex-col lg:flex-row w-screen justify-between p-4 lg:items-center gap-y-2'>
    <Typography className='text-neutral-600 text-xs'>
      © 2024 CeleriZ
    </Typography>
  </footer>
);
