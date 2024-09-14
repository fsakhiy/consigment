import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';

export interface ProfileProps {
  name: string;
  email: string;
  path: string;
}

const Profile: React.FC<ProfileProps> = ({ name, email, path }) => {
  return (
    <div className="flex flex-row gap-5 p-3 items-center">
      <div>
        <Avatar>
          <AvatarImage src={path} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </div>

      <div>
        <p className="font-bold text-xl">{name}</p>
        <p>{email}</p>
      </div>
      <div>
        <a href="/api/auth/logout">
            <button className="p-1 hover:bg-neutral-900">
                <LogoutIcon />
            </button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
