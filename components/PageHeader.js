export default function PageHeader(props) {
  const { page } = props;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* Dark Blue Pattern */}
      <h1 className="">{page}</h1>
    </div>
  );
}
