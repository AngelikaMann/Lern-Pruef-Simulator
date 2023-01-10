import { Injectable } from '@angular/core';
import { Frage } from '../shared/fragen';
@Injectable({
  providedIn: 'root',
})
export class FrageStoreService {
  fragenliste: Frage[];

  constructor() {
    this.fragenliste = [
      {
        id: 1,
        fragentext:
          ' Which of the following commands print the current working directory when using a Bash shell? (Choose two.)',
        antworten: [
          { antwort: 'A. echo "${PWD}"', richtig: true, gebAntwort: false },
          { antwort: 'B. echo "${WD}"', richtig: false, gebAntwort: false },
          { antwort: 'C. pwd', richtig: true, gebAntwort: false },
          { antwort: 'D. printwd', richtig: false, gebAntwort: false },
          { antwort: 'E. echo "${pwd}"', richtig: false, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 2,
        fragentext:
          ' Instead of supplying an explicit device in /etc/fstab for mounting, what other options maybe used to identify the intended partition? (Choose TWO correct answers.)',
        antworten: [
          { antwort: 'A. FIND', richtig: false, gebAntwort: false },
          { antwort: 'B. ID', richtig: false, gebAntwort: false },
          { antwort: 'C. LABEL', richtig: true, gebAntwort: false },
          { antwort: 'D. NAME', richtig: false, gebAntwort: false },
          { antwort: 'E. UUID', richtig: true, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 3,
        fragentext:
          '  Which of the following are init systems used within Linux systems? (Choose THREE correct answers.)',
        antworten: [
          { antwort: 'A. startd', richtig: false, gebAntwort: false },
          { antwort: 'B. systemd', richtig: true, gebAntwort: false },
          { antwort: 'C. Upstart', richtig: true, gebAntwort: false },
          { antwort: 'D. SysInit', richtig: true, gebAntwort: false },
          { antwort: 'E. SysV init', richtig: false, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 4,
        fragentext:
          ' Which of the following files exist in a standard GRUB 2 installation? (Choose two.)',
        antworten: [
          {
            antwort: 'A. /boot/grub/stages/stage0',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'B. /boot/grub/i386-pc/lvm.mod',
            richtig: true,
            gebAntwort: false,
          },
          { antwort: 'C. /boot/grub/fstab', richtig: false, gebAntwort: false },
          {
            antwort: 'D. /boot/grub/grub.cfg',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort: 'E. /boot/grub/linux/vmlinuz',
            richtig: false,
            gebAntwort: false,
          },
        ],
        type: 'mc',
      },

      {
        id: 5,
        fragentext:
          ' Which of the following are valid stream redirection operators within Bash? (Choose two.)',
        antworten: [
          { antwort: 'A. <', richtig: true, gebAntwort: false },
          { antwort: 'B. #>', richtig: false, gebAntwort: false },
          { antwort: 'C. %>', richtig: true, gebAntwort: false },
          { antwort: 'D. >>>', richtig: false, gebAntwort: false },
          { antwort: 'E. 2>&1', richtig: false, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 6,
        fragentext:
          'What can the Logical Volume Manager (LVM) be used for? (Choose THREE correct answers.)',
        antworten: [
          {
            antwort: 'A. To create RAID 9 arrays.',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'B. To dynamically change the size of logical volumes.',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'C. To encrypt logical volumes.',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort: 'D. To create snapshots.',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort: 'E. To dynamically create or delete logical volumes.',
            richtig: true,
            gebAntwort: false,
          },
        ],
        type: 'mc',
      },

      {
        id: 7,
        fragentext: '  What is true regarding UEFI firmware? (Choose two.)',
        antworten: [
          {
            antwort: 'A. It can read and interpret partition tables',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'B. It can use and read certain file systems',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort:
              'C. It stores its entire configuration on the /boot/ partition',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort:
              'D. It is stored in a special area within the GPT metadata',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort: 'E. It is loaded from a fixed boot disk position',
            richtig: false,
            gebAntwort: false,
          },
        ],
        type: 'mc',
      },
      {
        id: 8,
        fragentext:
          '  Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose TWO correct answers.)',
        antworten: [
          { antwort: 'A. esc ZZ', richtig: true, gebAntwort: false },
          { antwort: 'B. ctrl :w!', richtig: false, gebAntwort: false },
          { antwort: 'C. esc zz', richtig: false, gebAntwort: false },
          { antwort: 'D. esc :wq!', richtig: true, gebAntwort: false },
          { antwort: 'E. ctrl XX', richtig: false, gebAntwort: false },
        ],
        type: 'mc',
      },

      {
        id: 9,
        fragentext:
          '  Which of the following information is stored within the BIOS? (Choose TWO correct answers.)',
        antworten: [
          { antwort: 'A. Boot device order', richtig: true, gebAntwort: false },
          {
            antwort: 'B. Linux kernel version',
            richtig: false,
            gebAntwort: false,
          },
          { antwort: 'C. Timezone', richtig: false, gebAntwort: false },
          {
            antwort: 'D. Hardware configuration',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort: 'E. The system`s hostname',
            richtig: false,
            gebAntwort: false,
          },
        ],
        type: 'mc',
      },
      {
        id: 10,
        fragentext:
          ' Which of the following commands are common Linux commands for file management?(Choose three correct answers.)',
        antworten: [
          { antwort: 'A. copy', richtig: false, gebAntwort: false },
          { antwort: 'B. mv', richtig: true, gebAntwort: false },
          { antwort: 'C. move', richtig: false, gebAntwort: false },
          { antwort: 'D. cp', richtig: true, gebAntwort: false },
          { antwort: 'E. mkdir', richtig: true, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 11,
        fragentext:
          'When planning a partition scheme, which of the following directories could be considered for separate partitions? (Choose three.)',
        antworten: [
          { antwort: 'A. /etc', richtig: false, gebAntwort: false },
          { antwort: 'B. /home', richtig: true, gebAntwort: false },
          { antwort: 'C. /var', richtig: true, gebAntwort: false },
          { antwort: 'D. /lib', richtig: false, gebAntwort: false },
          { antwort: 'E. /opt', richtig: true, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 12,
        fragentext:
          'Which of the following commands set the sticky bit for the directory /tmp? (Choose TWO correct answers.)',
        antworten: [
          { antwort: 'A. chmod +s /tmp', richtig: false, gebAntwort: false },
          { antwort: 'B. chmod +t /tmp', richtig: true, gebAntwort: false },
          { antwort: 'C. chmod 1775 /tmp', richtig: true, gebAntwort: false },
          { antwort: 'D. chmod 4775 /tmp', richtig: false, gebAntwort: false },
          { antwort: 'E. chmod 2775 /tmp', richtig: false, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 13,
        fragentext:
          'Which of the following commands can be used to determine how long the system has been running? (Choose TWO correct answers.)?',
        antworten: [
          { antwort: 'A. uptime', richtig: true, gebAntwort: false },
          { antwort: 'B. up', richtig: false, gebAntwort: false },
          { antwort: 'C. top', richtig: true, gebAntwort: false },
          { antwort: 'D. uname -u', richtig: false, gebAntwort: false },
          { antwort: 'E. time -up', richtig: false, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 14,
        fragentext:
          'When is the content of the kernel ring buffer reset? (Choose two.)',
        antworten: [
          {
            antwort:
              'A. When the ring buffer is explicitly reset using the command dmesg --clear',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort:
              'B. When the ring buffer is read using dmesg without any additional parameters',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort:
              'C. When a configurable amount of time, 15 minutes by default, has passed',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort:
              'D. When the kernel loads a previously unloaded kernel module',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'E. When the system is shut down or rebooted',
            richtig: true,
            gebAntwort: false,
          },
        ],
        type: 'mc',
      },
      {
        id: 15,
        fragentext:
          'Which of the following commands is used to modify quota settings? (Choose two.)',
        antworten: [
          { antwort: 'A. editquota', richtig: false, gebAntwort: false },
          { antwort: 'B. setquota', richtig: true, gebAntwort: false },
          { antwort: 'C. edquota', richtig: true, gebAntwort: false },
          { antwort: 'D. quotaedit', richtig: false, gebAntwort: false },
          { antwort: 'E. quotaset', richtig: false, gebAntwort: false },
        ],
        type: 'mc',
      },
      {
        id: 16,
        fragentext:
          'Which of the following commands instructs SysV init to reload its configuration file?',
        antworten: [
          { antwort: 'A. reinit', richtig: false, gebAntwort: false },
          { antwort: 'B. initreload', richtig: false, gebAntwort: false },
          { antwort: 'C. telinit 7', richtig: false, gebAntwort: false },
          { antwort: 'D. telinit q', richtig: true, gebAntwort: false },
          { antwort: 'E. init reinit', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },
      {
        id: 17,
        fragentext:
          ' What is the first program the Linux kernel starts at boot time when using System V init?',
        antworten: [
          { antwort: 'A. /lib/init.so', richtig: false, gebAntwort: false },
          {
            antwort: 'B. /proc/sys/kernel/init',
            richtig: false,
            gebAntwort: false,
          },
          { antwort: 'C. /etc/rc.d/rcinit', richtig: false, gebAntwort: false },
          { antwort: 'D. /sbin/init', richtig: true, gebAntwort: false },
          { antwort: 'E. /boot/init', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },
      {
        id: 18,
        fragentext:
          ' Which of the following commands will write a message to the terminals of all logged in users?',
        antworten: [
          { antwort: 'A. bcast', richtig: false, gebAntwort: false },
          { antwort: 'B. mesg', richtig: false, gebAntwort: false },
          { antwort: 'C. print', richtig: false, gebAntwort: false },
          { antwort: 'D. wall', richtig: true, gebAntwort: false },
          { antwort: 'E. yell', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },
      {
        id: 19,
        fragentext:
          ' Which of the following commands makes /bin/foo executable by everyone but writable only by its owner?)',
        antworten: [
          {
            antwort: 'A. chmod u=rwx,go=rx /bin/foo',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort: 'B. chmod o+rwx,a+rx /bin/foo',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'C. chmod 577 /bin/foo',
            richtig: false,
            gebAntwort: false,
          },
          { antwort: 'D. cp', richtig: false, gebAntwort: false },
          { antwort: 'E. mkdir', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },
      {
        id: 20,
        fragentext:
          ' Which variable defines the directories in which a Bash shell searches for executable',
        antworten: [
          { antwort: 'A. BASHEXEC', richtig: false, gebAntwort: false },
          { antwort: 'B. BASHRC', richtig: false, gebAntwort: false },
          { antwort: 'C. PATH', richtig: true, gebAntwort: false },
          { antwort: 'D. EXECPATH', richtig: false, gebAntwort: false },
          { antwort: 'E. PATHRC', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },

      {
        id: 21,
        fragentext:
          ' Which of the following vi commands deletes two lines, the current and the following line?',
        antworten: [
          { antwort: 'A. d2', richtig: false, gebAntwort: false },
          { antwort: 'B. 2d', richtig: false, gebAntwort: false },
          { antwort: 'C. 2dd', richtig: true, gebAntwort: false },
          { antwort: 'D. dd2', richtig: false, gebAntwort: false },
          { antwort: 'E. de12', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },

      {
        id: 22,
        fragentext:
          ' Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?',
        antworten: [
          {
            antwort: 'A. fmt -f 1,4 /etc/passwd',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'B. split -c 1,4 /etc/passwd',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'C. cut -d : -f 1,4 /etc/passwd',
            richtig: true,
            gebAntwort: false,
          },
          { antwort: 'D. dd2', richtig: false, gebAntwort: false },
          { antwort: 'E. de12', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },

      {
        id: 23,
        fragentext:
          ' What is the process ID number of the init process on a SysV init based system?',
        antworten: [
          { antwort: 'A. -1', richtig: false, gebAntwort: false },
          { antwort: 'B. 0', richtig: false, gebAntwort: false },
          { antwort: 'C. 1', richtig: true, gebAntwort: false },
          {
            antwort: 'D. It is different with each reboot.',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'E. It is set to the current run level.',
            richtig: false,
            gebAntwort: false,
          },
        ],
        type: 'sc',
      },

      {
        id: 24,
        fragentext:
          'Which of the following command sets the Bash variable named TEST with the content FOO?',
        antworten: [
          { antwort: 'A. set TEST="FOO"', richtig: false, gebAntwort: false },
          { antwort: 'B. TEST = "FOO"', richtig: false, gebAntwort: false },
          { antwort: 'C. var TEST="FOO"', richtig: false, gebAntwort: false },
          { antwort: 'D. TEST="FOO"', richtig: true, gebAntwort: false },
        ],
        type: 'sc',
      },

      {
        id: 25,
        fragentext:
          'To what environment variable will you assign or append a value if you need to tell the dynamic linker to look in a build directory for some of a program shared libraries?',
        antworten: [
          { antwort: 'A. LD_LOAD_PATH', richtig: false, gebAntwort: false },
          { antwort: 'B. LD_LIB_PATH', richtig: false, gebAntwort: false },
          { antwort: 'C. LD_LIBRARY_PATH', richtig: true, gebAntwort: false },
          { antwort: 'D. LD_SHARE_PATH', richtig: false, gebAntwort: false },
          { antwort: 'E. LD_RUN_PATH', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },

      {
        id: 26,
        fragentext:
          'Which chown command will change the ownership to dave and the group to staff on a file named data.txt?',
        antworten: [
          {
            antwort: 'A. chown dave/staff data.txt',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'B. chown -u dave -g staff data.txt',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'C. chown --user dave --group staff data.txt',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'D. chown dave:staff data.txt',
            richtig: true,
            gebAntwort: false,
          },
        ],
        type: 'sc',
      },

      {
        id: 27,
        fragentext:
          'Which of the following commands can be used to create a new file that is 100kB in size?',
        antworten: [
          { antwort: 'A. dd', richtig: true, gebAntwort: false },
          { antwort: 'B. file', richtig: false, gebAntwort: false },
          { antwort: 'C. mkfile', richtig: false, gebAntwort: false },
          { antwort: 'D. touch', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },
      {
        id: 28,
        fragentext:
          'Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?',
        antworten: [
          {
            antwort: 'A. grub2 install /dev/sdc',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'B. grub-mkrescue /dev/sdc',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'C. grub-mbrinstall /dev/sdc',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'D. grub-setup /dev/sdc',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'E. grub-install /dev/sdc',
            richtig: true,
            gebAntwort: false,
          },
        ],
        type: 'sc',
      },
      {
        id: 29,
        fragentext:
          'Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?',
        antworten: [
          {
            antwort: 'A. tune2fs -d 200 /dev/sda1',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'B. tune2fs -c 200 /dev/sda1',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'C. tune2fs -i 200 /dev/sda1',
            richtig: true,
            gebAntwort: false,
          },
          {
            antwort: 'D. tune2fs -n 200 /dev/sda1',
            richtig: false,
            gebAntwort: false,
          },
          {
            antwort: 'E. tune2fs --days 200 /dev/sda1',
            richtig: false,
            gebAntwort: false,
          },
        ],
        type: 'sc',
      },
      {
        id: 30,
        fragentext:
          'Which of the following files, located in the user home directory, is used to store the Bash history?',
        antworten: [
          { antwort: 'A. .bash_history', richtig: true, gebAntwort: false },
          { antwort: 'B. .bash_histfile', richtig: false, gebAntwort: false },
          { antwort: 'C. .history', richtig: false, gebAntwort: false },
          { antwort: 'D. .bashrc_history', richtig: false, gebAntwort: false },
          { antwort: 'E. .history_bash', richtig: false, gebAntwort: false },
        ],
        type: 'sc',
      },
    ];
  }
  getAll(): Frage[] {
    return this.fragenliste;
  }
  getSingle(id: number): Frage {
    if (id < 0) {
      id = 0;
    }
    if (id > this.fragenliste.length - 1) {
      id = this.fragenliste.length - 1;
    }
    return this.fragenliste[id];
    //  return this.fragenliste.find(frage => frage.id.toString() === id);
  }
}
