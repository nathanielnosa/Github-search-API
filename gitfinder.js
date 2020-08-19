class gitHub{
  constructor(){
    this.client_id ='b7fc877a27e69281df41';
    this.client_sec ='c6955a61c23c6f732c537b11934043ae877ecc55';
    this.count = 5;
    this.orders = 'created:asc'
  }
  //get user profile
  async getUsers(user){
    const profileResponde = await fetch(`https://api.github.com/users/${user}?client_id=${this.client}&client_sec=${this.client_sec}`);

    const reposResponde = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.orders}&client_id=${this.client}&client_sec=${this.client_sec}`);

    const profile = await profileResponde.json();
    const repos = await reposResponde.json();
    return{
      profile,
      repos
    }
  }
}

 


