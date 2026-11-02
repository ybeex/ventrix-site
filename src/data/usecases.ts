export interface UseCase { slug: string; name: string; icon: string; short: string; headline: string; intro: string; problems: [string, string][]; wins: string[]; shot: string; articleSlug?: string }
export const useCases: UseCase[] = [
  { slug: 'tool-rooms', name: 'Tool rooms & stores', icon: 'tools', short: 'A counter, a cage and a hundred tools. Know where each one went.', headline: 'A tool room that never loses a torque wrench.',
    intro: 'Whether it is a factory cage or a site store, the problem is the same: tools leave, and nobody is sure who has them.',
    problems: [['The sign-out sheet', 'Handwriting nobody can read, and no way to chase a late return.'], ['The Friday scramble', 'Someone walks the floor asking who has the grinder.'], ['Shrinkage', 'Small losses nobody notices until they add up.']],
    wins: ['Every tool has a status and a name next to it', 'Overdue items surface on their own', 'Condition notes on return catch damage early', 'A counter tablet shared by the whole crew, with a quick PIN'], shot: 'outstanding', articleSlug: 'tool-room-checkout-policy' },
  { slug: 'workshops', name: 'Workshops & fabrication', icon: 'workshop', short: 'Consumables, jigs and power tools shared across benches and shifts.', headline: 'Stop stopping the line for a missing drill bit.',
    intro: 'Workshops use a mix of tools that come back and materials that don’t. Treat them differently and both get easier.',
    problems: [['Running out mid-job', 'The consumable you needed ran out last Tuesday.'], ['Benches hoarding tools', 'Things “borrowed” for a week.'], ['Counts that never match', 'Nobody knows why the numbers drift.']],
    wins: ['Minimums and reorder quantities on consumables', 'Check tools out to a bench or a job', 'Cycle counts per shelf, with reasons for every difference', 'Low-stock list you can take straight to purchasing'], shot: 'low-stock', articleSlug: 'consumables-vs-assets' },
  { slug: 'schools', name: 'Schools & labs', icon: 'school', short: 'Lab equipment, sports kit and AV gear that goes out and should come back.', headline: 'Lab equipment that comes back after the term.',
    intro: 'Teachers borrow projectors, students borrow microscopes. A light system beats a notebook in the staff room.',
    problems: [['Shared equipment', 'Nobody owns it, so nobody returns it.'], ['End-of-term audits', 'A weekend spent counting.'], ['Handovers', 'A new Ventrix inherits a mystery.']],
    wins: ['Check kit out to a teacher, department or class', 'Due dates around term dates', 'A clear record when staff change', 'Simple enough for a part-time Ventrix'], shot: 'collections' },
  { slug: 'contractors', name: 'Contractors & field crews', icon: 'field', short: 'Equipment that moves between sites, vans and crews.', headline: 'Know which van, which site, which crew.',
    intro: 'When tools travel, the record has to travel too. Work from a phone, even at the edge of coverage.',
    problems: [['Tools on the wrong site', 'Bought twice because nobody knew where the first one was.'], ['Bad signal', 'Software that needs a connection is software that doesn’t get used.'], ['Job costing', 'No idea what a job really used.']],
    wins: ['Check items out to a job site or a crew', 'Offline mode for yards and basements', 'Photos on check-out as proof of condition', 'Reports by job'], shot: 'checkout', articleSlug: 'offline-first-inventory' },
];
