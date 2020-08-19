//Inst github
const githubuser = new gitHub;

// inst UI
const ui = new UI;

//search user event listener
const search = document.querySelector('#searchuser');

search.addEventListener('keyup',(e)=>{
  const searchText = e.target.value;
  
  (searchText !=='')?
    githubuser.getUsers(searchText)
    .then(data =>{

      (data.profile.message === 'Not Found')? 
      //show alert message
      ui.showAlert('User Not Found!','alert alert-danger'):
      //display profile
      ui.displayProfile(data.profile);
      ui.displayRepos(data.repos);
    })
  :
    //clear profile
    ui.clearDisplay();
});