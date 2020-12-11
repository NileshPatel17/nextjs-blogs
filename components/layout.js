import Link from "next/link";

const Layout = ({ children }) => (
  <>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/post/101">
        <a>/post-101</a>
      </Link>
      <Link href="/post/102">
        <a>/post-102</a>
      </Link>
      <Link href="/blog/101">
        <a>/blog-101</a>
      </Link>
      <Link href="/blog/102">
        <a>/blog-102</a>
      </Link>
    </nav>
    <main>{children}</main>
    <style jsx>{`
      a {
        text-decoration: none;
      }
      nav {
        margin-bottom: 20px;
      }
      nav a {
        margin-right: 2px;
        padding: 4px;
      }
      main {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
);

export default Layout;
