export function getServerSideProps() {
  return {
    props: {
      date: new Date(),
    },
  };
}

function Home(props) {
  return <div>hello world {props.date instanceof Date ? "true" : "false"}</div>;
}

export default Home;
