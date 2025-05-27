export const chefs = {
    getChefs() {
        return [
            {
                id: 1,
                name: 'Chef Miguel Torres',
                jobTitle: 'Rising Star Chef',
                slug: 'chef-miguel-torres',
                image:
                    'https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b79476e8189471f5736049_chef-01.jpg',
            },
            {
                id: 2,
                name: 'Chef Dennis Barrett',
                jobTitle: 'CEO of NVBlast',
                slug: 'chef-dennis-barrett',
                image:
                    'https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65c5d0cd81d1e988cd58d2ef_chef-02.jpg',
            },
            {
                id: 3,
                name: 'Chef Joan Wallace',
                jobTitle: 'Pantry Chef',
                slug: 'chef-joan-wallace',
                image:
                    'https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b797a5efccbaed027a7ffa_chef-03.jpg',
            },
            {
                id: 4,
                name: 'Chef Judy Nguyen',
                jobTitle: 'Line Cook',
                slug: 'chef-judy-nguyen',
                image:
                    'https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b7984cb24504db927c86a8_chef-04.jpg',
            },
            {
                id: 5,
                name: 'Chef Billy Vasquez',
                jobTitle: 'Healthcare Chef',
                slug: 'chef-billy-vasquez',
                image:
                    'https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b798a0b2a15174faa0bf97_chef-05.jpg',
            },
            {
                id: 6,
                name: 'Chef Amanda Reed',
                jobTitle: 'Food Stylist',
                slug: 'chef-amanda-reed',
                image:
                    'https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65c5d0d86972594e3345e7ed_chef-06.jpg',
            },
        ];
    },
    getChefbySlug(slug) {
        return this.getChefs().find((chef) => chef.slug === slug);
    }
}