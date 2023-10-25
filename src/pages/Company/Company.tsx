import { useState } from "react";
import docFile from "../../assets/images/docFile.svg";
import editPencil from "../../assets/images/editPencil.svg";
import diablePencil from "../../assets/images/editPencilDisable.svg";
import usFlag from "../../assets/images/usa.svg";
import CustomButton from "../../components/shared/Buttons/CustomButton";
import DetailsList from "../../components/shared/DetailsList/DetailsLIst";
import Header from "../../components/shared/Header.tsx";
import InputLabel from "../../components/shared/InputLabel/InputLabel";
import MapComponent from "../../components/shared/Map/MapComponent.tsx";
import RightSidebar from "../../components/shared/RightSidebar/RightSidebar.tsx";

const Company = () => {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [editInfo, setEditInfo] = useState([]);
  const [sidebarTitle, setSidebarTitle] = useState("");
  const [editRequest, setEditRequest] = useState(false);

  const requestEditAccess = () => {
    setEditRequest(true);
  };
  const clickEdit = (info: any) => {
    setRightSidebarOpen(true);
    setSidebarTitle("Edit company details");
    setEditInfo(info);
  };
  const filterApply = () => {
    setRightSidebarOpen(false);
  };

  return (
    <div className="px-8  pt-12 lg:pt-0 relative overflow-hidden pb-10">
      <RightSidebar
        btn={{ text: "Submit", handleClick: filterApply }}
        title={sidebarTitle}
        rightSidebarOpen={rightSidebarOpen}
        setRightSidebarOpen={setRightSidebarOpen}
      >
        <EditInfo editInfo={editInfo} />
      </RightSidebar>
      <Header customClass="pb-5 lg:pb-10 w-full items-start" name="Company">
        <CustomButton
          block={!editRequest}
          hadleClick={requestEditAccess}
          btnClass="py-2 mt-2 sm:0 lg:mt-0 w-fit lg:w-fit h-fit lg:h-[42px] h-[56px] px-5 text-sm font-normal rounded-lg  border  border-orange-500 text-orange-500"
          text={editRequest ? "Edit ACCESS" : "REQUEST FOR EDIT ACCESS"}
        />
      </Header>

      <CompanyInfo editRequest={editRequest} clickEdit={clickEdit} />
    </div>
  );
};
export default Company;

const CompanyInfo = ({ editRequest, clickEdit }) => {
  const addressArr = [
    {
      id: 1,
      label: "Receiver Name",
      name: "Thomas Parker",
      value: "Thomas Parker"
    },
    {
      id: 2,
      label: "Phone",
      name: (
        <div className="flex items-center gap-2">
          <p className="font-medium">+8 7784500150</p>
        </div>
      ),
      value: "+8 7784500150"
    },
    {
      id: 3,
      label: "Address",
      name: "1890 Popular Avenue, USA , 273892",
      value: "1890 Popular Avenue, USA , 273892"
    }
  ];
  const CompanyAddressArr = [
    {
      id: 1,
      label: "Streeet",
      name: "663 Pine Street",
      value: "663 Pine Street"
    },
    {
      id: 2,
      label: "City",
      name: "Pittsburgh",
      value: "Pittsburgh"
    },
    {
      id: 3,
      label: "State",
      name: "PA",
      value: "PA"
    },
    {
      id: 4,
      label: "Postal Code",
      name: "123424",
      value: "123424"
    },
    {
      id: 5,
      label: "Country",
      name: (
        <p className="flex items-center gap-2">
          <img src={usFlag} alt="us_flag" />
          <span>USA</span>
        </p>
      ),
      value: "USA"
    }
  ];
  const primaryContactPerson = [
    {
      id: 1,
      label: "First Name",
      name: "Mr. Jeff",
      value: "Mr. Jeff"
    },
    {
      id: 2,
      label: "Last Name",
      name: "Harper",
      value: "Harper"
    },
    {
      id: 3,
      label: "Email",
      name: "jeffharper 1990@gmail.com",
      value: "jeffharper 1990@gmail.com"
    },
    {
      id: 4,
      label: "Phone Number",
      name: (
        <p className="flex items-center gap-2">
          <img src={usFlag} alt="us_flag" />
          <span>+1 23424 85451</span>
        </p>
      ),
      value: "+1 23424 85451"
    }
  ];
  return (
    <div>
      <WithEditIcon
        data={addressArr}
        editRequest={editRequest}
        clickEdit={clickEdit}
      >
        {
          <DetailsList
            customClass={"justify-start items-start"}
            title="Company DETAILS"
            infoArr={addressArr}
          />
        }
      </WithEditIcon>
      <WithEditIcon
        data={CompanyAddressArr}
        editRequest={editRequest}
        clickEdit={clickEdit}
      >
        {
          <DetailsList
            approval={"pending"}
            customClass={"justify-start items-start"}
            title="Company ADDRESS"
            infoArr={CompanyAddressArr}
          />
        }
      </WithEditIcon>
      <WithEditIcon
        data={primaryContactPerson}
        editRequest={editRequest}
        clickEdit={clickEdit}
      >
        {
          <DetailsList
            customClass={"justify-start items-start"}
            title="PRIMARY CONTACT PERSON"
            infoArr={primaryContactPerson}
          />
        }
      </WithEditIcon>
      <WithEditIcon
        data={addressArr}
        editRequest={editRequest}
        clickEdit={clickEdit}
      >
        <div className="w-full p-5  rounded-lg bg-white shadow-sm mb-10">
          <h1 className="uppercase font-bold text-[#191C52] flex items-center gap-3 mb-5">
            REGISTRATION DOCUMENTS
          </h1>
          <div className="flex flex-wrap gap-y-3">
            {[1, 2, 3, 4].map((doc) => (
              <div
                key={doc}
                className=" cursor-pointer w-full md:w-1/2 lg:w-1/3 "
              >
                <div className="rounded-lg border  flex items-center relative gap-3 px-4 py-3 mx-4">
                  <div className="w-full flex gap-3">
                    <img src={doc.docFile || docFile} alt="doc" />
                    <p className="font-medium w-full">
                      {doc.name || "register-certificate.docx"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WithEditIcon>
      {/* Component for map */}
      <div className="shadow-lg rounded-xl overflow-hidden">
        <MapComponent />
      </div>
    </div>
  );
};

const EditInfo = ({ editInfo }) => {
  return (
    <div>
      {editInfo.map((info) => (
        <InputLabel
          defaultValue={info.value}
          key={info.id}
          label={info.label}
          placeholder={info.label}
        />
      ))}
    </div>
  );
};

const WithEditIcon = ({ data, clickEdit, children, editRequest = false }) => {
  return (
    <div className="relative w-full md:w-1/2 lg:w-full ">
      {children}
      <img
        onClick={editRequest ? () => clickEdit(data) : null}
        className="cursor-pointer absolute top-5 right-8"
        src={editRequest ? editPencil : diablePencil}
        alt="edit"
      />
    </div>
  );
};
