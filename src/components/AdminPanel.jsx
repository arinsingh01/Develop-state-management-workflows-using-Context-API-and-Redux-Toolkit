import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminPanel = () => {
    const { user } = useContext(AuthContext);

    const isAdmin = user?.role === 'admin';

    return (
        <div>
            <h1>Admin Panel</h1>
            {isAdmin ? (
                <div>
                    <h2>Product Management Features</h2>
                    <button>Add Product</button>
                    <button>Edit Product</button>
                    <button>Delete Product</button>
                </div>
            ) : (
                <p>You do not have access to this panel.</p>
            )}
        </div>
    );
};

export default AdminPanel;