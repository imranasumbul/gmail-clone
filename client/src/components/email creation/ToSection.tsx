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
        <option value="2c4ed97c-9efb-4b71-bba4-099cd9da17af@mailslurp.net">2c4ed97c-9efb-4b71-bba4-099cd9da17af@mailslurp.net</option>
        <option value="72bc851b-1ec2-461b-871e-a10dac5bfe53@mailslurp.net">72bc851b-1ec2-461b-871e-a10dac5bfe53@mailslurp.net</option>
        <option value="54dfef9b-3f4a-42a2-bad4-00504c2bdf15@mailslurp.net">54dfef9b-3f4a-42a2-bad4-00504c2bdf15@mailslurp.net</option>
        <option value="63e4bbbe-2ee6-460b-b0cf-8a81de00074b@mailslurp.net">63e4bbbe-2ee6-460b-b0cf-8a81de00074b@mailslurp.net</option>
        <option value="095d7667-eae7-4b82-85a6-75077b6f71bf@mailslurp.net">f095d7667-eae7-4b82-85a6-75077b6f71bf@mailslurp.net</option>
        <option value="d3e33c09-f74f-4260-a9a2-c2fa8c82a6c5@mailslurp.net">d3e33c09-f74f-4260-a9a2-c2fa8c82a6c5@mailslurp.net</option>
        <option value="decc782e-8740-45b1-bfbe-8fbdec6bb52f@mailslurp.net">decc782e-8740-45b1-bfbe-8fbdec6bb52f@mailslurp.net</option>
        <option value="85a07099-57f9-4e2c-8e4b-625cfb0b170e@mailslurp.net">85a07099-57f9-4e2c-8e4b-625cfb0b170e@mailslurp.net</option>
        <option value="e18999d3-e030-422c-a82d-57b44dcc1151@mailslurp.net">e18999d3-e030-422c-a82d-57b44dcc1151@mailslurp.net</option>
        {/* Add more options as needed */}
      </select>
        </>
    )
}

export default React.memo(ToSection);