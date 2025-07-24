export default function ContactPage() {

  const [isPresent, setIsPresent] = useState(false);

  return (
    <>
      <h1>basic contact page</h1>
      {
        if(isPresent) {
          <div> is present true</div>
        }
        else {
          <div>is present false</div>
        }
    }
    </>
  );
}
