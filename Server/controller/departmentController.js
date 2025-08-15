import departmentRegistor from "../user_modules/dapartments.js";


const departreg = async (req, res) => {

  try {
    const { name } = req.body;

    const newdepartment = new departmentRegistor({ name });
    await newdepartment.save();


    res.status(201).json({ message: " created a department", department: newdepartment });
  } catch (error) {
    res.status(500).json({ message: "Error during a creating a  new departmrnt", error: error.message });
  }


};

const getDepartments = async (req, res) => {
  try {
    const departments = await departmentRegistor.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDepartment = async (req, res) => {

  try {
    const { name } = req.body;
    const { id } = req.params;

    const updatedDepartment = await departmentRegistor.findByIdAndUpdate(id, { name }, { new: true });

    if(!updatedDepartment) {
      return res.status(404).json({ success: false, message: "Department not found" });
    }
    
    res.status(200).json({ success: true, message: "Department updated", department: updatedDepartment });
  } catch(error) {
    res.status(500).json({ success: false, message: "Error updating department", error: error.message });

  }

}

const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await departmentRegistor.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ success: false, message: "Department not found" });
        }

        res.status(200).json({ success: true, message: "Department deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting department", error: error.message });
    }
};

export { departreg, getDepartments, updateDepartment,deleteDepartment};