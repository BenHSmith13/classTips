import React        from 'react';

export default (props) => {

  const styles = {
    replies: {
      backgroundColor: 'grey',
      padding: '10px',
      margin: '5px',
      color: 'white',
      borderRadius: '5px',
      textAlign: 'left'
    },
    author: {
      fontStyle: 'italic'
    }
  };

  return <div style={styles.replies}>
    {props.reply.post_text}
    <div style={styles.author}>
      - {props.reply.user_name}
    </div>
  </div>
}