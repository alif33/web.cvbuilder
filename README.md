# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Fields

resume(redux slice){ 
    heading: {firstName, surName, address, phone, email, linkedin}
    summary, objectives, declaration, expertise: {body}
    educations: [{institutionName, location, qualification, studyField, graduationYear, result,description}]
    experiences: [{title, employer, location, country, duration, description}]
    skills: [{name, percentage}]
    personal: {fatherName, motherName, permanentAddress, nationality, nid, religion, dob, sex, maritalStatus, bloodGroup}
    references:{ name, designation, institute, phone, email} 
}