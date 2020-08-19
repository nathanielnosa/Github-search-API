class UI{
  constructor(){
    this.display = document.querySelector('#display');
  }

  displayProfile(user){
    this.display.innerHTML = `
    <div class='card card-body mb-3'>
      <div class='row'>
        <div class='col-md-3'>
          <img class=
          "img-fluid mb-2" src='${user.avatar_url}'>
          <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-3"> View Profile</a>
        </div>

        <div class='col-md-9'>
          <span class="badge badge-info"> Public Repos: ${user.public_repos} </span>
          <span class="badge badge-secondary"> Public Gists: ${user.public_gists} </span>
          <span class="badge badge-danger"> Followers: ${user.followers} </span>
          <span class="badge badge-warning"> Following: ${user.following} </span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Comapny: ${user.company}</li>
            <li class="list-group-item">Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Membership: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }
  //Display repos
  displayRepos(repos){
    let result = '';
    repos.forEach((repo)=>{
      result += `
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank" class="btn btn-primary mb-3">${repo.name}</a>

              </div>
              <div class="col-md-6">
              <span class="badge badge-info"> Star: ${repo.stargazers_count} </span>
              <span class="badge badge-secondary"> Watchers: ${repo.watchers_count} </span>
              <span class="badge badge-danger"> Forks: ${repo.forks_count} </span>
              <span class="badge badge-warning"> Open Issue: ${repo.open_issues} </span>
              </div>
            </div>
          </div>
        `;
    });
    document.querySelector('#repos').innerHTML = result;
  }

  //Clear profile
  clearDisplay(){
    this.display.innerHTML = '';
  }

  //show alert message
  showAlert(msg, className){
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div,search);

    setTimeout(()=>{
      document.querySelector('.alert').remove();
    },2000)
    
  }
}