import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { addItem, deleteItem } from "../redux/actions";
import NoteItem from "./NoteItem";
import NoteForm from "./NoteForm";
import SecondHeader from "./SecondHeader";

const Account = (props) => {
  const { logOut, user } = UserAuth();
  const { show, setShow } = useState(false);
  const { activeItem, setActiveItem } = useState(null);
  const { addItem, diaryItems, deleteItem } = props;

  const handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.activeItem,
    });
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-3">
        <SecondHeader />
      </div>
      {/* <h1 className="text-center text-2xl font-bold pt-12">Account</h1> */}

      <div className="max-w-7xl mx-auto pt-20">
        <div className="flex justify-center items-center ">
          <div className="bg-white shadow-2xl w-[50%] m-4 p-3">
            <h1 className="text-center text-2xl font-bold ">Dear Diary...</h1>
            <NoteForm addItem={(item) => addItem(item)} />
          </div>
          <div
            className="bg-white shadow-2xl w-[50%] m-4 p-3"
            style={{ paddingTop: 20 }}
          >
            {diaryItems.length > 0 ? (
              diaryItems.map((item) => {
                return (
                  <NoteItem
                    deleteItem={(id) => deleteItem(id)}
                    showModal={(item) =>
                      this.setState({ show: true, activeItem: item })
                    }
                    key={item.id}
                    item={item}
                  />
                );
              })
            ) : (
              <h1>No Items</h1>
            )}
          </div>
        </div>
        <Modal
          size="lg"
          show={show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {activeItem?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body contentEditable={true}>{activeItem?.text}</Modal.Body>
          <Modal.Footer>{activeItem?.date}</Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
