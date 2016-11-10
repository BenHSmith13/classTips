import React        from 'react';

export default class SearchButtons extends React.Component{

  getStyles(){
    return {
      buttons: {
        margin: '10px',
      }
    }
  }

  render(){
    const styles = this.getStyles();

    return <div>
      <button className="btn btn-primary" style={styles.buttons}>Find Class</button>
      <button className="btn btn-primary" style={styles.buttons}>Find School</button>
    </div>
  }
}