import { Modal, useMantineTheme } from '@mantine/core';

function ProfileNodal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      size="lg"
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input type="text" className="infoInput" name="firstname" placeholder="First Name" />
          <input type="text" className="infoInput" name="lastname" placeholder="Last Name" />
        </div>

        <div>
          <input type="text" className="infoInput" name="WorksAt" placeholder="Works At" />
        </div>

        <div>
          <input type="text" className="infoInput" name="Lives In" placeholder="Lives In" />
          <input type="text" className="infoInput" name="Country" placeholder="Country" />
        </div>

        <div>
          <input type="text" className="infoInput" name="Relationship" placeholder="Relationship Status" />
        </div>

        <div>
          Profile Image
          <input type="file" name="ProfileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}
export default ProfileNodal;
