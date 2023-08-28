import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { addNew } from "../store/employeeSlice";

const initialState = {
  img: "",
  name: "",
  position: "",
  department: "",
  attendance: "",
  date: "",
  phone: "",
  email: "",
  office: "",
  role: "",
  manager: "",
};

function FormPopup({ isOpen, closePopup, setSearchEmp }) {
  const [employee, setEmployee] = useState(initialState);
  const error = Object.values(employee).some((value) => value === "");
  const dispatch = useDispatch();

  // Drag image function
  const onDrop = (acceptedFiles) => {
    // Handle dropped image
    if (acceptedFiles.length > 0) {
      const uploadedFile = URL.createObjectURL(acceptedFiles[0]);
      setEmployee((prevState) => ({ ...prevState, img: uploadedFile }));
    }
  };

  const { getRootProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });
  //////////////////////////////

  function handleChange(e) {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function addNewEmployee() {
    if (error) return;
    const newEmployee = { ...employee, id: crypto.randomUUID() };
    dispatch(addNew(newEmployee));
    setEmployee(initialState);
    setSearchEmp([]);
    closePopup();
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={closePopup}
        PaperProps={{ style: { maxWidth: "1250px" } }}
      >
        <DialogTitle className="text-[#23aaeb] " sx={{ fontWeight: "normal" }}>
          NEW EMPLOYEE
        </DialogTitle>

        <DialogContent>
          <section className="dialogContent">
            <h3 className="text-[#23aaeb] text-base font-bold mb-8 relative mt-1">
              Personal Info
              <span className="absolute left-0 -bottom-1 w-[44px] h-1 bg-[#DFF2FB] rounded-[3px]"></span>
              <span className="absolute left-0 -top-1 w-full h-[0.2px] bg-[#23aaeb] "></span>
            </h3>

            <div className="flex gap-6">
              <div {...getRootProps()}>
                {employee.img ? (
                  <img
                    src={employee.img}
                    alt="Uploaded"
                    style={{ width: "100%", height: "105px" }}
                  />
                ) : (
                  <p className="uppercase border-gray-500 border border-dashed w-60 py-10 px-6 text-center text-[#5c6974]  font-roboto text-sm tracking-wider">
                    drag image here
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 grid-rows-2 gap-2 items-end  ">
                <div>
                  <span className=" font-roboto text-xs block">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className=" w-full styleInput"
                    onChange={handleChange}
                    value={employee.name}
                  />
                </div>
                <div>
                  <span className=" font-roboto text-xs block">Start Date</span>
                  <input
                    type="text"
                    name="date"
                    placeholder="20/3/2020"
                    required
                    className=" w-full styleInput"
                    onChange={handleChange}
                    value={employee.date}
                  />
                </div>
                <div>
                  <span className=" font-roboto text-xs block">Phone</span>
                  <input
                    type="text"
                    name="phone"
                    required
                    className=" w-full styleInput"
                    onChange={handleChange}
                    value={employee.phone}
                  />
                </div>
                <div>
                  <span className=" font-roboto text-xs block">Email</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    className=" styleInput"
                    onChange={handleChange}
                    value={employee.email}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="dialogContent">
            <h3 className="text-[#23aaeb] text-base font-bold mb-4 mt-4 relative">
              Office Info
              <span className="absolute left-0  -bottom-1 w-[44px] h-1 bg-[#DFF2FB] rounded-[3px]"></span>
            </h3>
            <div className="grid grid-cols-2 grid-rows-4 justify-between gap-2">
              <div className="col-span-2">
                <span className=" font-roboto text-xs block  ">Office</span>
                <input
                  type="text"
                  name="office"
                  placeholder="Name"
                  required
                  className=" w-full styleInput "
                  onChange={handleChange}
                  value={employee.office}
                />
              </div>
              <div>
                <span className=" font-roboto text-xs block  ">Department</span>
                <input
                  type="text"
                  name="department"
                  required
                  className=" w-full styleInput "
                  onChange={handleChange}
                  value={employee.department}
                />
              </div>
              <div>
                <span className=" font-roboto text-xs block  ">
                  Attendance Profile
                </span>
                <select
                  name="attendance"
                  required
                  className=" w-full styleInput "
                  onChange={handleChange}
                  value={employee.attendance}
                >
                  <option disabled defaultValue value="">
                    Select
                  </option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Weekend">Weekend</option>
                  <option value="Holiday">Holiday</option>
                  <option value="OnLeave">On Leave</option>
                </select>
              </div>
              <div>
                <span className=" font-roboto text-xs block  ">Role</span>
                <input
                  type="text"
                  name="role"
                  required
                  className=" w-full styleInput "
                  onChange={handleChange}
                  value={employee.role}
                />
              </div>
              <div>
                <span className=" font-roboto text-xs block  ">Position</span>
                <input
                  type="text"
                  name="position"
                  required
                  className=" w-full styleInput"
                  onChange={handleChange}
                  value={employee.position}
                />
              </div>
              <div className="col-span-2">
                <span className=" font-roboto text-xs block  ">
                  Direct Manager
                </span>
                <input
                  type="text"
                  name="manager"
                  required
                  className=" w-1/2 styleInput "
                  onChange={handleChange}
                  value={employee.manager}
                />
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-[#23aaeb] text-base font-bold mb-6 mt-2 relative">
              Work From Home
              <span className="absolute left-0  -bottom-1 w-[44px] h-1 bg-[#DFF2FB] rounded-[3px]"></span>
            </h3>
            <div className="space-x-2 flex items-center relative">
              <input
                type="checkbox"
                name="remote"
                id="remote"
                className=" accent-[#2764ac]"
              />
              <label
                htmlFor="remote"
                className=" capitalize  font-roboto font-bold text-xs text-[#313030] "
              >
                allow employee to work from home
              </label>
              <span className="absolute left-0  -bottom-4 w-full h-[0.2px] bg-[#d2d2d2] "></span>
            </div>
          </section>
        </DialogContent>
        <DialogActions>
          <button
            onClick={closePopup}
            className="bg-[#ff6a6a] text-white w-20 h-7 text-sm font-roboto rounded-md"
          >
            Cancel
          </button>
          <button
            disabled={error}
            onClick={addNewEmployee}
            className="bg-[#23aaeb] text-white w-20 h-7 text-sm font-roboto rounded-md disabled:cursor-not-allowed"
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormPopup;
