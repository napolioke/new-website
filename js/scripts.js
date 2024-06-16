function filterProjects() {
    const filter = document.getElementById('project-filter').value.toUpperCase();
    const projects = document.getElementById('projects');
    const projectDivs = projects.getElementsByClassName('project');

    for (let i = 0; i < projectDivs.length; i++) {
        const project = projectDivs[i];
        const title = project.getElementsByTagName('h3')[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            project.style.display = "";
        } else {
            project.style.display = "none";
        }
    }
}
