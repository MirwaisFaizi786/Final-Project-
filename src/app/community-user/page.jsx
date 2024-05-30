import React from "react";
import styles from "../../styles/Community.module.css";
import Partner from "../../components/partner/Partner";
import UserCard from "../../components/usercard/UserCard";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getNormalUser } from "../../actions/userAction/userAction";

export default async function page() {
  const data = await getNormalUser();
  return (
    <div>
      <div className={styles.background}>
        <p className={styles.slogan}>
          Meet new friends wherever you go and discover the world with us and
          our community...
        </p>
      </div>
      <div className={styles.page}>
        <p className="font-bold text-2xl mt-5 text-gray-900">
          You are sharing the same trip. Connect your fellow travelers!
        </p>
      </div>
      <div className="m-10 grid grid-cols-3 justify-between gap-3">
        {data.data.users.map((user) => (
          <UserCard user={user} key={user._id} />
        ))}
      </div>

      <Link href="/profile">
        <button className="rounded-full flex gap-3 items-center hover:cursor-pointer m-10 text-gray-600">
          <FaArrowLeft /> profile
        </button>
      </Link>
    </div>
  );
}
