import React from 'react';

const Error = () => {
    return (
        <div style={styles.container}>
            <h2>Oops! Something went wrong...</h2>
            <p>The website is currently experiencing issues.</p>
            <p>Please contact the admin to resolve the problem.</p>
            {/* You can include a contact button or details here */}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
        marginTop: '50px',
    },
};

export default Error;
