import React from "react";
import { useRecoilState } from "recoil";
import { sendingMail } from "../../store/atoms/sendingMail";

const ToSection = function (){
    const [sendingMailInfo, setSendingMailInfo] = useRecoilState(sendingMail);
    return (
        <>
        
        <select
        onChange={(e) => {
          setSendingMailInfo({
            ...sendingMailInfo,
            to: e.target.value,
          });
        }}
        className="w-[100%] flex-none h-10 p-2"
        name="emailTo"
        id="emailTo"
        defaultValue="" // Default empty option
      >
        <option value="" disabled>
          Select Recipient
        </option>
        <option value="65bd1850-2dde-497c-a375-87eff648c867@mailslurp.net">65bd1850-2dde-497c-a375-87eff648c867@mailslurp.net</option>
        <option value="c2306048-ee0a-41ee-86a4-dfe81cdfafbe@mailslurp.net">c2306048-ee0a-41ee-86a4-dfe81cdfafbe@mailslurp.net</option>
        <option value="ec8562da-63c2-485f-87e5-7a34a665c876@mailslurp.net">ec8562da-63c2-485f-87e5-7a34a665c876@mailslurp.net</option>
        <option value="10a1a4c6-27b3-4624-a061-66ec38e257ee@mailslurp.net">10a1a4c6-27b3-4624-a061-66ec38e257ee@mailslurp.net</option>
        <option value="f69146f2-53b5-406d-a4a4-2f1e01f83024@mailslurp.net">f69146f2-53b5-406d-a4a4-2f1e01f83024@mailslurp.net</option>
        <option value="a4d84db3-e06b-4e11-b498-74d55a3a6ffd@mailslurp.net">a4d84db3-e06b-4e11-b498-74d55a3a6ffd@mailslurp.net</option>
        <option value="d4f25d23-c6b5-48a5-a90e-e9184e105ee2@mailslurp.net">d4f25d23-c6b5-48a5-a90e-e9184e105ee2@mailslurp.net</option>
        <option value="1ea7412e4-0ff2-4a58-a18a-df4617d8f651@mailslurp.net">ea7412e4-0ff2-4a58-a18a-df4617d8f651@mailslurp.net</option>
        <option value="e6ff3802-28f5-4c40-83ce-8665d56a2b9e@mailslurp.net">e6ff3802-28f5-4c40-83ce-8665d56a2b9e@mailslurp.net</option>
        {/* Add more options as needed */}
      </select>
        </>
    )
}

export default React.memo(ToSection);