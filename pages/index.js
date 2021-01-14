export function getServerSideProps() {
  return {
    props: {
      date: new Date(),
    },
  };
}

export default function Home(props) {
  return <div>hello world {props.date instanceof Date ? "true" : "false"}</div>;
}

