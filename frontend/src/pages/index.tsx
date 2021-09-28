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
import { auth, Login, Logout } from "../lib/auth";

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <div>
      <button onClick={() => Login()}>ログイン</button>
      <button onClick={() => Logout()}>ログアウト</button>
    </div>
    <div>
      <pre>
        {auth.currentUser
          ? auth.currentUser.displayName + "でログインしています"
          : "ログインしていません"}
      </pre>
    </div>
  </>
);

export default IndexPage;
