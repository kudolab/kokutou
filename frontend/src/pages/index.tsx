// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <ul>
//         <li>
//           <Link href="/user">ユーザー</Link>
//         </li>
//         <li>
//           <Link href="/general">一般</Link>
//         </li>
//       </ul>
//
//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   );
// }
import auth from "../lib/auth";
import { CurrentUser } from "../components/CurrentUser";
import { NeedLogin } from "../components/NeedLogin";

const IndexPage = () => {
  if (auth.currentUser() === null) {
    return (
      <>
        <h1>Hello Next.js 👋</h1>
        <div>
          <NeedLogin />
        </div>
        <div>
          <button onClick={() => auth.login()}>ログイン</button>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <div>
        <CurrentUser user={auth.currentUser()} />
      </div>
      <div>
        <button onClick={() => auth.logout()}>ログアウト</button>
      </div>
    </>
  );
};

const UserLoading: React.VFC = () => <div>ロード中</div>;

export default IndexPage;
