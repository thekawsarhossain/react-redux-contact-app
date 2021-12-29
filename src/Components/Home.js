import React from 'react';

const Home = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-8 mx-auto">
                    <h2>Hello There </h2>
                </div>
                <div className="col-md-4 text-right">
                    <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Contact</button>
                </div>
            </div>
            {/* <!-- Modal information here  --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;