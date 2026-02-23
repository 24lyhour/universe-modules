// Stub file for wayfinder actions (production build)

const ProfileController = {
    update: {
        form: () => ({
            action: '/settings/profile',
            method: 'patch',
        }),
    },
    destroy: {
        form: () => ({
            action: '/settings/profile',
            method: 'delete',
        }),
    },
};

export default ProfileController;
