import {useEffect, useState} from 'react';

interface Code {
  code: string;
}

function Code(props: Code) {
  const [comp, setComp] = useState<any | undefined>(undefined);
  useEffect(() => {
    if (window) {
      import('@uiw/react-codemirror').then((obj) => {
        if (!comp) {
          setComp(obj.default);
        }
      });
    }
  }, []);

  const Comps = comp;
  return (
    <div>
      {Comps && (
        <Comps
          value={JSON.stringify(props.code)}
          options={{
            mode: 'jsx',
          }}
        />
      )}
    </div>
  );
}

export default Code;
