"use client";

import Profile, { ProfileProps } from "./Profile";

const Sidebar: React.FC<ProfileProps> = ({ path, name, email }) => {
  return (
    <div>
      <Profile path={path} name={name} email={email} />
    </div>
  );
};

export default Sidebar;
