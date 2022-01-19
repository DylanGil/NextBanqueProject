import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "./src/components/Main";
CI = false;

export default function Home() {
  return <Main name="Dylan" />;
}
