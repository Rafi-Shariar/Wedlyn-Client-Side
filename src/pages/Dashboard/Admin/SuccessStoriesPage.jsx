import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import LottiLoading from '../../../components/shared/LottiLoading';
const SuccessStoriesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["success-stories"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/successstories`);
      return res.data;
    },
  });

  const handleOpenModal = (story) => {
    console.log(story);
    
    setSelectedStory(story);
    setOpenModal(true);
  };

  if (isLoading) {
    return <LottiLoading/>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">Success Stories</h1>

      <div className="overflow-x-auto">
        <table className="w-full border text-left text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-3">Male Biodata ID</th>
              <th className="p-3">Female Biodata ID</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{story?.maleID}</td>
                <td className="p-3 font-medium">{story?.femaleID}</td>
                <td className="p-3 text-center">
                  <Button onClick={() => handleOpenModal(story)} color="blue">
                    View Story
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)} size="xl">
  <div className="bg-white rounded-lg p-6">
    <ModalHeader >
      <h1 className="text-black">Success Story</h1>
    </ModalHeader>
    <ModalBody>
      {selectedStory ? (
        <div className="space-y-4 text-gray-800">
           <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
  {/* Text Section */}
  <div className="flex-1 space-y-2 text-gray-800">
    <p className="text-base">
      <strong className="text-primary">Male Biodata ID:</strong> {selectedStory?.maleID}
    </p>
    <p className="text-base">
      <strong className="text-primary">Female Biodata ID:</strong> {selectedStory?.femaleID}
    </p>
    <p className="text-base">
      <strong className="text-primary">Marriage Date:</strong> {selectedStory?.marriageDate}
    </p>
    <p className="text-base">
      <strong className="text-primary">Review:</strong> {selectedStory?.reviewStar}/5
    </p>
    <p className="text-base">
      <strong className="text-primary">Shared By:</strong> {selectedStory?.userName}
    </p>
  </div>

  {/* Image Section */}
  <div className="w-32 h-32 border-2 border-primary rounded-full overflow-hidden shadow-md">
    <img
      src={selectedStory?.userImage}
      alt="Success Couple"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          <div>
            <p className="font-semibold mb-1">Story:</p>
            <p className="text-base p-4 bg-gray-100 rounded-lg shadow-sm leading-relaxed">
              {selectedStory?.successStory}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading story...</p>
      )}
    </ModalBody>
  </div>
</Modal>

    </div>
  );
};

export default SuccessStoriesPage;
