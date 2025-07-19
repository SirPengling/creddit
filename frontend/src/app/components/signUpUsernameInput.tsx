'use client';
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function SignUpUsernameInput() {
  const [rules, setRules] = useState({
    length: false,
    alphanumeric: false,
    
  });
  const [inputValue, setInputValue] = useState('');
  const [info, setInfo] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    // validate the username
    if (inputValue.length < 3 || inputValue.length > 16) {
      setRules({ length: false, alphanumeric: rules.alphanumeric });
    }
    else {
      setRules({ length: true, alphanumeric: rules.alphanumeric });
    }

    if (/^[a-zA-Z0-9_-]+$/.test(inputValue)) {
      setRules({ length: rules.length, alphanumeric: true });
    } else {
      setRules({ length: rules.length, alphanumeric: false });
    }

  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <label className="text-zinc-400 mb-1 text-sm" htmlFor="username-input">
          Username
        </label>
        <input
          id="username-input"
          className="rounded border border-zinc-600 p-2.5 py-1.5"
          onChange={handleChange}
        />
        <ul id="username-info" className="hidden text-sm text-zinc-400 mt-2 text-center">
          {rules.length 
          ? <li className="text-green-400"><Icon className="inline mr-1 -translate-y-0.5" icon="octicon:check-16" color="#05df72" />Username must be between 3 and 16 characters long.</li>
          : <li className="text-red-500"><Icon className="inline mr-1 -translate-y-0.5" icon="octicon:x-16" color="#fb2c36" />Username must be between 3 and 16 characters long.</li>
          }
          {rules.alphanumeric
          ? <li className="text-green-400"><Icon className="inline mr-1 -translate-y-0.5" icon="octicon:check-16" color="#05df72" />Username can only contain letters, numbers and <span className="font-mono">-</span> or <span className="font-mono">_</span>.</li>
          : <li className="text-red-500"><Icon className="inline mr-1 -translate-y-0.5" icon="octicon:x-16" color="#fb2c36" />Username can only contain letters, numbers and <span className="font-mono">-</span> or <span className="font-mono">_</span>.</li>
          }
        </ul>
      </div>
        
    </div>
  );
}
