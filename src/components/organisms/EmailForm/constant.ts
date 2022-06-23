/**
 * お問い合わせ内容
 */
export const CONTACT_TYPE = {
  recruit: '求人応募',
  experience: '見学',
  contact: 'お問い合わせ',
} as const;

type ContactType = typeof CONTACT_TYPE;
type ContactTypeValue = ContactType[keyof ContactType];
export type ContactTypeKey = keyof ContactType;
type ContactTypeItem = { label: ContactTypeValue; value: ContactTypeKey };

export const CONTACT_TYPE_ITEMS: ContactTypeItem[] = [
  { label: '求人応募', value: 'recruit' },
  { label: '見学', value: 'experience' },
  { label: 'お問い合わせ', value: 'contact' },
];

/**
 * 応募職種
 */
export const JOB = {
  cast: 'キャスト',
  employee: '正社員',
  staff: 'ホールスタッフ',
} as const;

type Job = typeof JOB;
type JobValue = Job[keyof Job];
export type JobKey = keyof Job;
type JobItem = { label: JobValue; value: JobKey };

export const JOB_ITEMS: JobItem[] = [
  { label: 'キャスト', value: 'cast' },
  { label: '正社員', value: 'employee' },
  { label: 'ホールスタッフ', value: 'staff' },
];

/**
 * 現在の就業状況
 */

export const RECRUITE_STATUS = {
  fresh: '新卒',
  incumbent: '在職中',
  retire: '離職中',
} as const;

type RecruitStatus = typeof RECRUITE_STATUS;
type RecruiteStatusValue = RecruitStatus[keyof RecruitStatus];
export type RecruiteStatusKey = keyof RecruitStatus;
type RecruitStatusItem = {
  label: RecruiteStatusValue;
  value: RecruiteStatusKey;
};
export const RECRUITE_STATUS_ITEMS: RecruitStatusItem[] = [
  { label: '新卒', value: 'fresh' },
  { label: '在職中', value: 'incumbent' },
  { label: '離職中', value: 'retire' },
];
