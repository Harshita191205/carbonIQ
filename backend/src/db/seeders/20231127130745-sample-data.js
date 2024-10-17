const db = require('../models');
const Users = db.users;

const Activities = db.activities;

const Contacts = db.contacts;

const Leads = db.leads;

const Metrics = db.metrics;

const Notes = db.notes;

const Organizations = db.organizations;

const ActivitiesData = [
  {
    description: 'Call with Acme Corporation',

    start_time: new Date('2023-10-01T09:00:00'),

    end_time: new Date('2023-10-01T10:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Meeting with Smith Family',

    start_time: new Date('2023-10-02T11:00:00'),

    end_time: new Date('2023-10-02T12:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Follow-up with GreenTech Innovations',

    start_time: new Date('2023-10-03T14:00:00'),

    end_time: new Date('2023-10-03T15:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Review with Johnson & Co.',

    start_time: new Date('2023-10-04T16:00:00'),

    end_time: new Date('2023-10-04T17:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Contract signing with Doe Enterprises',

    start_time: new Date('2023-10-05T10:00:00'),

    end_time: new Date('2023-10-05T11:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'Alice',

    last_name: 'Johnson',

    email: 'alice.johnson@example.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Bob',

    last_name: 'Smith',

    email: 'bob.smith@example.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Charlie',

    last_name: 'Brown',

    email: 'charlie.brown@example.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Diana',

    last_name: 'Prince',

    email: 'diana.prince@example.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Eve',

    last_name: 'Adams',

    email: 'eve.adams@example.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Acme Corporation',

    status: 'Lost',

    category: 'Family',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Smith Family',

    status: 'Won',

    category: 'Other',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'GreenTech Innovations',

    status: 'Qualified',

    category: 'Other',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Johnson & Co.',

    status: 'Qualified',

    category: 'Corporate',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Doe Enterprises',

    status: 'Lost',

    category: 'Family',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const MetricsData = [
  {
    name: 'Lead Conversion Rate',

    value: 75.5,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Customer Satisfaction',

    value: 88.2,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Marketing ROI',

    value: 120,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Case Resolution Time',

    value: 48.3,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Client Retention Rate',

    value: 92.7,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const NotesData = [
  {
    content: 'Initial meeting with Acme Corporation went well.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Smith Family is interested in our services.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'GreenTech Innovations needs a follow-up call.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Johnson & Co. decided to go with another firm.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Doe Enterprises signed the contract.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'John Dalton',
  },

  {
    name: 'Paul Dirac',
  },

  {
    name: 'Ludwig Boltzmann',
  },

  {
    name: 'William Harvey',
  },

  {
    name: 'Edward O. Wilson',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User4 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (User4?.setOrganization) {
    await User4.setOrganization(relatedOrganization4);
  }
}

async function associateActivityWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setUser) {
    await Activity0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setUser) {
    await Activity1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setUser) {
    await Activity2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setUser) {
    await Activity3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setUser) {
    await Activity4.setUser(relatedUser4);
  }
}

async function associateActivityWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setLead) {
    await Activity0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setLead) {
    await Activity1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setLead) {
    await Activity2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setLead) {
    await Activity3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setLead) {
    await Activity4.setLead(relatedLead4);
  }
}

async function associateActivityWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setOrganization) {
    await Activity0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setOrganization) {
    await Activity1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setOrganization) {
    await Activity2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setOrganization) {
    await Activity3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setOrganization) {
    await Activity4.setOrganization(relatedOrganization4);
  }
}

// Similar logic for "relation_many"

async function associateContactWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setOrganization) {
    await Contact0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setOrganization) {
    await Contact1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setOrganization) {
    await Contact2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setOrganization) {
    await Contact3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact4 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Contact4?.setOrganization) {
    await Contact4.setOrganization(relatedOrganization4);
  }
}

async function associateLeadWithOwner() {
  const relatedOwner0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOwner) {
    await Lead0.setOwner(relatedOwner0);
  }

  const relatedOwner1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOwner) {
    await Lead1.setOwner(relatedOwner1);
  }

  const relatedOwner2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOwner) {
    await Lead2.setOwner(relatedOwner2);
  }

  const relatedOwner3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setOwner) {
    await Lead3.setOwner(relatedOwner3);
  }

  const relatedOwner4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead4 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Lead4?.setOwner) {
    await Lead4.setOwner(relatedOwner4);
  }
}

async function associateLeadWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOrganization) {
    await Lead0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOrganization) {
    await Lead1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOrganization) {
    await Lead2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setOrganization) {
    await Lead3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead4 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Lead4?.setOrganization) {
    await Lead4.setOrganization(relatedOrganization4);
  }
}

async function associateMetricWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric0 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Metric0?.setUser) {
    await Metric0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric1 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Metric1?.setUser) {
    await Metric1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric2 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Metric2?.setUser) {
    await Metric2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric3 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Metric3?.setUser) {
    await Metric3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Metric4 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Metric4?.setUser) {
    await Metric4.setUser(relatedUser4);
  }
}

async function associateMetricWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric0 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Metric0?.setOrganization) {
    await Metric0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric1 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Metric1?.setOrganization) {
    await Metric1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric2 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Metric2?.setOrganization) {
    await Metric2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric3 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Metric3?.setOrganization) {
    await Metric3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric4 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Metric4?.setOrganization) {
    await Metric4.setOrganization(relatedOrganization4);
  }
}

async function associateNoteWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setUser) {
    await Note0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setUser) {
    await Note1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setUser) {
    await Note2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setUser) {
    await Note3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setUser) {
    await Note4.setUser(relatedUser4);
  }
}

async function associateNoteWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setLead) {
    await Note0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setLead) {
    await Note1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setLead) {
    await Note2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setLead) {
    await Note3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setLead) {
    await Note4.setLead(relatedLead4);
  }
}

async function associateNoteWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setOrganization) {
    await Note0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setOrganization) {
    await Note1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setOrganization) {
    await Note2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setOrganization) {
    await Note3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setOrganization) {
    await Note4.setOrganization(relatedOrganization4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activities.bulkCreate(ActivitiesData);

    await Contacts.bulkCreate(ContactsData);

    await Leads.bulkCreate(LeadsData);

    await Metrics.bulkCreate(MetricsData);

    await Notes.bulkCreate(NotesData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateActivityWithUser(),

      await associateActivityWithLead(),

      await associateActivityWithOrganization(),

      // Similar logic for "relation_many"

      await associateContactWithOrganization(),

      await associateLeadWithOwner(),

      await associateLeadWithOrganization(),

      await associateMetricWithUser(),

      await associateMetricWithOrganization(),

      await associateNoteWithUser(),

      await associateNoteWithLead(),

      await associateNoteWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('metrics', null, {});

    await queryInterface.bulkDelete('notes', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
