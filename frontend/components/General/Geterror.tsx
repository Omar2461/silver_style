type Errortype = {
  location: string;
  msg: string;
  path: string;
  type: string;
  value: string;
};

type GeterrorProps = {
  name: string;
  error?: Errortype[];
};

function Geterror({ name, error }: GeterrorProps) {

  if (!Array.isArray(error)) return null;

  const renderErrors = error?.map((err: Errortype, idx) => {
    if (err.path === name){
        return <div key={idx} className="text-red-500 text-sm">{err.msg}</div>;
    }
  });

  return <>{renderErrors}</>;
}

export default Geterror;
